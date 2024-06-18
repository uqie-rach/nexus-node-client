import {
  RiAddLine,
  RiArrowLeftSFill,
  RiArrowRightSFill,
  RiFileWarningLine,
  RiStickyNoteLine,
} from "@remixicon/react";
import {
  Card,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { Link } from "react-router-dom";
import { subjectCards } from "./subject.helper";
import { subjects as allSubjects } from "../../utils/constants/subjects";
import { useEffect, useState } from "react";

const Subject = () => {
  const [subjects, setSubjects] = useState(null);
  const [semester, setSemester] = useState(3);
  const [currentSubjects, setCurrentSubjects] = useState(null);
  const [limit, setLimit] = useState({
    start: 0,
    end: 10,
  });

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

  // Fetch subjects
  const fetchSubjects = async () => {
    try {
      const response = allSubjects;
      setSubjects(response);
      setCurrentSubjects(response.filter((a) => a.semester === semester));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *
   * @param {string} action
   */
  const handlePagination = (action) => {
    switch (action) {
      case "+":
        if (limit.end >= subjects.length) {
        } else {
          setLimit((prev) => ({
            ...prev,
            start: limit.start + 10,
            end: limit.end + 10,
          }));
        }
        break;

      case "-":
        if (limit.start <= 0) {
          setLimit((prev) => ({
            ...prev,
            start: 0,
            end: 10,
          }));
        } else {
          setLimit((prev) => ({
            ...prev,
            start: limit.start - 10,
            end: limit.end - 10,
          }));
        }
        break;
    }
  };

  // Fired when the component is mounted
  useEffect(() => {
    fetchSubjects();
    setSemester(3);
  }, []);

  return (
    subjects && (
      <div>
        <section className="h-screen overflow-scroll dashboard">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

          {/* Small Cards */}
          <div className="flex gap-4 justify-between">
            <Card className="shadow-tremor-card w-1/4 flex flex-col gap-4 animate-slideUp flex-1">
              <div className="flex flex-col-reverse md:flex-row gap-4 justify-between">
                <div>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-4">
                    All Subjects
                  </p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                    {subjects && subjects.length}
                  </p>
                </div>
                <Icon
                  icon={RiFileWarningLine}
                  size="xl"
                  variant="light"
                  className="rounded-full w-[64px] h-[64px] animate-pulse"
                  color="red"
                />
              </div>
            </Card>
            <Card className="shadow-tremor-card w-1/4 flex flex-col gap-4 animate-slideUp flex-1">
              <div className="flex flex-col-reverse md:flex-row gap-4 justify-between">
                <div>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-4">
                    Ongoing Subjects
                  </p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                    {currentSubjects && currentSubjects.length}
                  </p>
                </div>
                <Icon
                  icon={RiStickyNoteLine}
                  size="xl"
                  variant="light"
                  className="rounded-full w-[64px] h-[64px] animate-pulse"
                  color="yellow"
                />
              </div>
            </Card>
          </div>

          <br />

          {/* Current semester subjects */}
          <Card
            className="animate-slideUp"
            decoration="right"
            decorationColor="blue"
          >
            <div className="flex justify-between mb-4 items-center flex-wrap gap-4">
              {/* Card title */}
              <h3
                id="#current-semester"
                className="text-lg font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Current Semester Subjects
              </h3>

              <Link to="/subjects/new" className="rounded-md hover:bg-blue-500">
                <Icon icon={RiAddLine} className="hover:text-white" />
              </Link>
            </div>

            {/* Test */}
            <Table>
              <TableHead className="bg-slate-100 rounded-md">
                <TableRow>
                  {getTableHeaderCell(subjects[0]).map((tableHeader, i) => (
                    <TableHeaderCell key={i}>
                      {tableHeader.toUpperCase()}
                    </TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  /**
                   * @param {Object} item
                   */
                  subjects &&
                    subjects
                      .filter((a) => a.semester === semester)
                      .map((item) => (
                        <TableRow key={item.name}>
                          <TableCell>{item.code}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.sks}</TableCell>
                          <TableCell>{item.semester}</TableCell>
                        </TableRow>
                      ))
                }
              </TableBody>
            </Table>
          </Card>

          {/* All Subjects */}
          <br />
          <Card
            className="animate-slideUp"
            decoration="right"
            decorationColor="blue"
          >
            <div className="flex justify-between mb-4 items-center flex-wrap gap-4">
              {/* Card title */}
              <h3
                id="#current-semester"
                className="text-lg font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                All Subjects
              </h3>

              <Link to="/subjects/new" className="rounded-md hover:bg-blue-500">
                <Icon icon={RiAddLine} className="hover:text-white" />
              </Link>
            </div>

            {/* Test */}
            <Table>
              <TableHead className="bg-slate-100 rounded-md">
                <TableRow>
                  {getTableHeaderCell(subjects[0]).map((tableHeader, i) => (
                    <TableHeaderCell key={i}>
                      {tableHeader.toUpperCase()}
                    </TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  /**
                   * @param {Object} item
                   */
                  subjects &&
                    subjects.slice(limit.start, limit.end).map((item) => (
                      <TableRow key={item.name}>
                        <TableCell>{item.code}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.sks}</TableCell>
                        <TableCell>{item.semester}</TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
            <div className="flex gap-2 mt-4 mx-auto w-fit">
              <Icon
                icon={RiArrowLeftSFill}
                className="text-slate-400 cursor-pointer transition-all hover:scale-125 hover:text-slate-600"
                size="lg"
                onClick={() => handlePagination("-")}
              />
              <Icon
                icon={RiArrowRightSFill}
                className="text-slate-400 cursor-pointer transition-all hover:scale-125 hover:text-slate-600"
                size="lg"
                onClick={() => handlePagination("+")}
              />
            </div>
            <div className="text-center">
              <p className="text-tremor-content-subtle dark:text-dark-tremor-content-strong">
                Showing {limit.start + 1} -{" "}
                {(limit.start + 1 === subjects.length && limit.start + 1) ||
                  limit.end}{" "}
                of {subjects.length} subjects
              </p>
            </div>
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
      </div>
    )
  );
};

export default Subject;
