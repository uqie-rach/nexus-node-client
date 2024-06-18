import { Route, Routes } from "react-router-dom";
import { Dashboard, NotFound, Tasks, Subject, SubjectForm } from "./pages";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/subjects" element={<Subject />} />
        <Route path="/subjects/new" element={<SubjectForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
