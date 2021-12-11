import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useFetchProjects() {
  const [loading, setLoad] = useState(false);
  const [projectState, setproState] = useState([]);
  const [projectsHL, SetProjectsHL] = useState([]);
  const [projectWL, setProjectsWL] = useState([]);
  const FetchProjects = useCallback(async () => {
    await setLoad(true);
    try {
      const response = await axios.get(
        "https://nodejsportfolio2212.herokuapp.com/api/Projects"
      );
      if (response) {
        if (response.status === 200) {
          if (response.data.status.statusCode === 200) {
            setproState(response.data.status);
            SetProjectsHL(response.data.projects.projectsHL);
            setProjectsWL(response.data.projects.projectsWL);
          }
          if (response.data.status.statusCode === 204) {
            setproState(response.data.status);
            SetProjectsHL(response.data.projects.projectsHL);
            setProjectsWL(response.data.projects.projectsWL);
          }
        }
      }
      await setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    FetchProjects();
  }, [FetchProjects]);
  return [loading, projectState, projectsHL, projectWL];
}
