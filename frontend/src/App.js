import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/home-page/HomePage';
import TasksPage from './pages/tasks-page/TasksPage';
import AreasPage from './pages/areas-page/AreasPage';
import ResourcesPage from './pages/resources-page/ResourcesPage';
import ArchivesPage from './pages/archives-page/ArchivesPage';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/archives" element={<ArchivesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
