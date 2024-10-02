import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectOverlay from "./Pages/ProjectOverlay";
import ProjectData, { Project } from "./Data/Projects";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<ProjectOverlay />}>
          {ProjectData.map((project: Project, key: number) => {
            if (project.page && project.source)
              return (
                <Route
                  key={key}
                  path={project.source}
                  element={<project.page />}
                />
              );
            else return <></>;
          })}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
