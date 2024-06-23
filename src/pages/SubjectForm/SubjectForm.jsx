import {
  Button,
  Card,
  NumberInput,
  TextInput,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Icon,
  AreaChart,
  Select,
  SelectItem,
  Textarea,
} from "@tremor/react";
import {
  RiArrowGoBackLine,
  RiAtLine,
  RiCodeLine,
  RiLoader3Line,
  RiRefreshLine,
} from "@remixicon/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { subjects } from "../../utils/constants/subjects";

const SubjectForm = () => {
  const [loader, setLoader] = useState({
    loading: false,
    fetching: false,
  });
  const [semester, setSemester] = useState(3);
  const [currentSemesterSubjects, setCurrentSemesterSubjects] = useState(null);
  const navigate = useNavigate();
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleAddSubject = (e) => {
    e.preventDefault();
    setLoader((prevState) => ({
      ...prevState,
      loading: true,
    }));

    setTimeout(() => {
      try {
        console.log("Subject added");
      } catch (error) {
      } finally {
        setLoader((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    }, 1400);
  };

  const handleChangeCurrentSemester = (value) => {
    setLoader((prevState) => ({
      ...prevState,
      fetching: true,
    }));

    setTimeout(() => {
      try {
        setSemester(value);
        setCurrentSemesterSubjects(
          subjects.filter((a) => a.semester === value)
        );
      } catch (error) {
      } finally {
        setLoader((prevState) => ({
          ...prevState,
          fetching: false,
        }));
      }
    }, 1000);
  };

  useEffect(() => {
    setLoader({
      loading: false,
      fetching: false,
    });
    setCurrentSemesterSubjects(subjects.filter((a) => a.semester === semester));
  }, []);

  return (
    <section className="h-screen overflow-scroll dashboard">
      <header>
        <Button
          variant="light"
          type="button"
          onClick={() => navigate("/subjects")}
        >
          <span className="flex gap-1 items-center">
            <Icon icon={RiArrowGoBackLine} size="md" />
            Back
          </span>
        </Button>
      </header>
      <h1 className="text-3xl font-bold mb-4">New Subject Form</h1>

      {/* Single input form */}
      <div className="flex gap-4">
        <Card className="animate-slideUp">
          <TabGroup>
            <TabList className="">
              <Tab>Single</Tab>
              <Tab>Multiple</Tab>
            </TabList>
            <br />
            <TabPanels>
              <TabPanel>
                <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Single Input Form
                </h3>
                <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                  Input new subject details
                </p>

                <br />

                <form>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="col-span-full">
                      <label
                        htmlFor="name"
                        className="block text-tremor-content dark:text-dark-tremor-content"
                      >
                        Name
                      </label>
                      <TextInput
                        icon={RiAtLine}
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Subject Name"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="code"
                        className="block text-tremor-content dark:text-dark-tremor-content"
                      >
                        Code
                      </label>
                      <TextInput
                        icon={RiCodeLine}
                        type="text"
                        id="code"
                        className="input"
                        placeholder="Subject Code"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="semester"
                        className="block text-tremor-content dark:text-dark-tremor-content"
                      >
                        Semester
                      </label>
                      <NumberInput
                        min={1}
                        max={8}
                        defaultValue={2}
                        id="semester"
                        enableStepper={false}
                        placeholder="Semester"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="SKS"
                        className="block text-tremor-content dark:text-dark-tremor-content"
                      >
                        SKS
                      </label>
                      <NumberInput
                        min={1}
                        max={3}
                        defaultValue={2}
                        enableStepper={false}
                        id="SKS"
                        placeholder="SKS"
                        required
                      />
                    </div>
                    <div className="col-start-1 flex items-center">
                      <Button
                        variant="primary"
                        className="w-[100px]"
                        type="submit"
                        onClick={handleAddSubject}
                        disabled={loader.loading}
                      >
                        <span className="flex gap-1.5 items-center">
                          {loader.loading && (
                            <Icon
                              icon={RiLoader3Line}
                              size="sm"
                              color="white"
                              className="p-0 animate-spin"
                            />
                          )}{" "}
                          Submit
                        </span>
                      </Button>
                      &emsp;
                      <Button
                        variant="light"
                        type="reset"
                        color="red"
                        className="px-4 py-2"
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                </form>
              </TabPanel>
              <TabPanel>
                <form>
                  <div className="grid grid-cols-3 grid-rows-1 gap-4">
                    <div className="col-span-full">
                      <label
                        htmlFor="json"
                        className="block text-tremor-content dark:text-dark-tremor-content"
                      >
                        JSON Data
                      </label>
                      <Textarea
                        icon={RiAtLine}
                        id="json"
                        rows={6}
                        className="input resize-none"
                        placeholder="JSON Data"
                        required
                      />

                      <br />
                      <div className="flex items-center">
                        <Button
                          variant="primary"
                          className="w-[100px]"
                          type="submit"
                          onClick={handleAddSubject}
                          disabled={loader.loading}
                        >
                          <span className="flex gap-1.5 items-center">
                            {loader.loading && (
                              <Icon
                                icon={RiLoader3Line}
                                size="sm"
                                color="white"
                                className="p-0 animate-spin"
                              />
                            )}{" "}
                            Submit
                          </span>
                        </Button>
                        &emsp;
                        <Button
                          variant="light"
                          type="reset"
                          color="red"
                          className="px-4 py-2"
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Card>

        {/* Chart */}
        <Card className="animate-slideUp">
          <div className="flex justify-between items-center">
            <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Current Semester Subjects
            </h3>

            <div className="flex gap-2">
              {loader.fetching && (
                <Icon
                  icon={RiRefreshLine}
                  size="md"
                  color="cyan"
                  className="animate-spin"
                />
              )}
              <Select
                defaultValue={1}
                value={semester}
                className="w-fit"
                onChange={handleChangeCurrentSemester}
              >
                {semesters.map((item, i) => (
                  <SelectItem value={item} key={i}>
                    {item}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <br />
          <AreaChart
            data={currentSemesterSubjects}
            index="code"
            categories={["name", "sks"]}
            colors={["cyan"]}
            xAxisLabel="Subject Code"
            yAxisLabel="SKS"
            connectNulls={true}
            showTooltip={true}
          />
        </Card>
      </div>

      <br />
    </section>
  );
};

export default SubjectForm;
