import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill, RiLoader5Line } from "@remixicon/react";
import {
  AreaChart,
  Card,
  Icon,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { chartData, gradeCourse, mockDashboard } from "./Dashboard";
import { useContext, useEffect, useState } from "react";

import "./Dashboard.css";
import { AppContext } from "../../utils/context/AppContext";

const Dashboard = () => {
  const [filterRules, setFilterRules] = useState({
    sortBy: "ascending",
    field: "name",
  });
  const [semester, setSemester] = useState(1);
  const [coursesData, setCoursesData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { updateSidebarItem } = useContext(AppContext);

  useEffect(() => {
    fetchSemesterData();
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      alert("fff");
    });
  }, []);

  const fetchSemesterData = () => {
    try {
      setTimeout(() => {
        setCoursesData(gradeCourse[0].subjects.sort((a, b) => a.name - b.name));
      }, 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   *
   * @param {string} value
   */
  const handleChangeSemester = (value) => {
    try {
      setTimeout(() => {
        setSemester(value);

        const data = gradeCourse.find(
          (item) => item.semester === value
        ).subjects;

        setCoursesData(data);
      }, 400);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   *
   * @param {Object} data
   * @returns Array
   */
  const getTableHeaderCell = (data) => {
    const tableHeaderCells = [];
    Object.keys(data).forEach((key) => tableHeaderCells.push(key));

    return tableHeaderCells;
  };

  /**
   *
   * @param {string} field
   * @param {string} value
   */
  const changeFilterRules = (field, value) => {
    setFilterRules((prevState) => ({
      ...prevState,
      [field]: value,
    }));

    if (value === "name" || value === "code" || value === "grade") {
      console.log("field sorting...");

      if (filterRules.sortBy === "ascending") {
        setCoursesData(
          gradeCourse
            .find((item) => item.semester === semester)
            .subjects.sort((a, b) =>
              a[value].toLowerCase().localeCompare(b[value].toLowerCase())
            )
        );
      } else {
        setCoursesData(
          gradeCourse
            .find((item) => item.semester === semester)
            .subjects.sort((a, b) =>
              b[value].toLowerCase().localeCompare(a[value].toLowerCase())
            )
        );
      }
    } else {
      if (filterRules.sortBy === "ascending") {
        setCoursesData(
          gradeCourse
            .find((item) => item.semester === semester)
            .subjects.sort((a, b) => a[value] - b[value])
        );
      } else {
        setCoursesData(
          gradeCourse
            .find((item) => item.semester === semester)
            .subjects.sort((a, b) => b[value] - a[value])
        );
      }
    }

    if (field === "sortBy") {
      const rule = filterRules.field;

      if (rule === "name" || rule === "code" || rule === "grade") {
        console.log("case 1");
        if (value === "descending") {
          setCoursesData(
            gradeCourse
              .find((item) => item.semester === semester)
              .subjects.sort((a, b) =>
                b[rule].toLowerCase().localeCompare(a[rule].toLowerCase())
              )
          );
        }

        if (value === "ascending") {
          setCoursesData(
            gradeCourse
              .find((item) => item.semester === semester)
              .subjects.sort((a, b) =>
                a[rule].toLowerCase().localeCompare(b[rule].toLowerCase())
              )
          );
        }
      } else {
        console.log("case 2");
        if (value === "descending") {
          setCoursesData(
            gradeCourse
              .find((item) => item.semester === semester)
              .subjects.sort((a, b) => b[rule] - a[rule])
          );
        }

        if (value === "ascending") {
          setCoursesData(
            gradeCourse
              .find((item) => item.semester === semester)
              .subjects.sort((a, b) => a[rule] - b[rule])
          );
        }
      }
    }
  };

  return (
    <section className="h-screen overflow-scroll dashboard">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="flex items-center gap-4">
        {mockDashboard.map((item, i) => (
          <Card
            className="shadow-tremor-card w-1/4 flex flex-col gap-4  animate-slideUp"
            key={i}
            decoration="top"
            decorationColor="slate"
          >
            <div className="flex flex-col-reverse xl:flex-row gap-4 justify-between">
              <div>
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-4">
                  {item.category}
                </p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                  {item.count}
                </p>
              </div>
              <Icon
                icon={item.icon}
                size="xl"
                variant="light"
                color={item.color}
                className="rounded-full w-[64px] animate-pulse"
              />
            </div>

            <Link
              to={item.path}
              className="flex justify-between items-center"
              onClick={() => updateSidebarItem(item.path)}
            >
              <span>Details</span>
              <Icon
                icon={RiArrowRightDoubleFill}
                className="hover:animate-ping"
              />
            </Link>
          </Card>
        ))}
      </div>

      <br />

      {/* Chart */}
      <Card
        className="animate-slideUp"
        decoration="top"
        decorationColor="slate"
      >
        <h3 className="text-lg font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          GPA per Semester
        </h3>
        <AreaChart
          className="mt-4 h-72"
          data={chartData}
          index="semester"
          categories={["IP", "IPK"]}
          colors={["cyan", "indigo"]}
          xAxisLabel="Semester"
          yAxisLabel="GPA"
          connectNulls={true}
          showTooltip={true}
        />
      </Card>

      <br />
      {/* Table */}
      <Card
        className="animate-slideUp"
        decoration="top"
        decorationColor="slate"
      >
        <div className="flex justify-between mb-4 items-center flex-wrap gap-4">
          {/* Card title */}
          <h3 className="text-lg font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Subjects Grade
          </h3>

          {/* See details */}
          <Link
            to="/subjects"
            className="flex items-center gap-2 animate-bounce"
            onClick={() => updateSidebarItem("subjects")}
          >
            <Icon icon={RiArrowRightDoubleFill} />
          </Link>
        </div>

        <div className="flex gap-2 mb-4">
          {/* Other filter */}
          <Select
            defaultValue={1}
            value={filterRules.field}
            className="w-fit"
            onChange={(value) => changeFilterRules("field", value)}
          >
            {getTableHeaderCell(gradeCourse[0].subjects[0]).map((item, i) => (
              <SelectItem value={item} key={i}>
                {item[0].toUpperCase() + item.slice(1)}
              </SelectItem>
            ))}
          </Select>

          {/* Filter Asc & Desc */}
          <Select
            defaultValue={1}
            value={filterRules.sortBy}
            className="w-fit"
            onChange={(value) => changeFilterRules("sortBy", value)}
          >
            <SelectItem value="ascending">Ascending</SelectItem>
            <SelectItem value="descending">Descending</SelectItem>
          </Select>

          {/* Filter by semester */}
          <Select
            defaultValue={1}
            value={semester}
            className="w-fit"
            onChange={handleChangeSemester}
          >
            {gradeCourse.map((item, i) => (
              <SelectItem value={item.semester} key={i}>
                Semester {item.semester}
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* Test */}
        <Table>
          <TableHead className="bg-slate-100 rounded-md">
            <TableRow>
              {getTableHeaderCell(gradeCourse[0].subjects[0]).map(
                (tableHeader, i) => (
                  <TableHeaderCell key={i}>
                    {tableHeader.toUpperCase()}
                  </TableHeaderCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              /**
               * @param {Object} item
               */
              (!coursesData && (
                <span className="mx-auto mt-10">
                  <Icon
                    icon={RiLoader5Line}
                    size="xl"
                    className="animate-spin"
                  />
                </span>
              )) ||
                coursesData.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>{item.code}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.sks}</TableCell>
                    <TableCell>{item.grade}</TableCell>
                    <TableCell>{item.mark}</TableCell>
                  </TableRow>
                ))
            }
          </TableBody>
        </Table>
      </Card>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Dashboard;
