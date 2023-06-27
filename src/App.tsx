import { useContext, useEffect, useState } from "react";
import Checkbox from "./components/Checkbox";
import TableRow from "./components/TableRow";
import TrashIcon from "./components/icons/TrashIcon";
import { filesData } from "./data/files";
import Spinner from "./components/icons/Spinner";
import ChevronRight from "./components/icons/ChevronRight";
import { FilesContext } from "./context/FilesContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { allFiles, setAllFiles, selectedFiles, setSelectedFiles } =
    useContext(FilesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchAllFiles = async () => {
    return new Promise<string>((resolve) => {
      // Here we don't need error handling, since we are using mock data and the data is always valid.
      setTimeout(() => {
        resolve(filesData);
      }, 600);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedFiles = await fetchAllFiles();
      const parsedFiles = JSON.parse(fetchedFiles);
      setAllFiles(parsedFiles);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const areAllFilesSelected = allFiles?.length === selectedFiles.length;

  const handleSelectAllFiles = () => {
    if (areAllFilesSelected) {
      setSelectedFiles([]);
    } else {
      const newSelectedFiles = allFiles?.map((file) => file.id);
      setSelectedFiles(newSelectedFiles);
    }
  };

  const deleteSelectedFiles = async () => {
    setIsDeleting(true);
    return new Promise(() => {
      // Here we don't need error handling, since the data will always be deleted.
      setTimeout(() => {
        const newFiles = allFiles?.filter(
          (file) => !selectedFiles.includes(file.id)
        );
        const deletedFiles = allFiles?.length - newFiles?.length;
        toast.success(`Fail${deletedFiles > 1 ? "id" : ""} kustutatud.`, {
          autoClose: 1000,
          position: "top-right",
        });
        setAllFiles(newFiles);
        setSelectedFiles([]);
        setIsDeleting(false);
      }, 600);
    });
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="w-full min-h-screen pt-10 bg-white">
      <ToastContainer />
      <div className="flex flex-col max-w-6xl gap-6 p-2 m-auto">
        <nav className="flex items-center gap-2 text-sm">
          <a className="text-gray-400 hover:underline" href="#">
            Dokumendid
          </a>
          <ChevronRight />
          <a href="#" className="font-medium hover:underline">
            Hankedokumendid
          </a>
        </nav>

        {allFiles.length === 0 ? (
          <p className="text-center">Kaust on tühi.</p>
        ) : (
          <>
            <button
              onClick={deleteSelectedFiles}
              disabled={selectedFiles.length === 0 || isDeleting}
              className="disabled:opacity-30"
            >
              <TrashIcon className="ml-2" />
            </button>
            <div className="relative overflow-x-auto">
              <table
                className={`${
                  isDeleting ? "opacity-50" : ""
                } w-full divide-y whitespace-nowrap`}
              >
                <thead>
                  <tr>
                    <th scope="col">
                      <Checkbox
                        isChecked={areAllFilesSelected}
                        onChange={handleSelectAllFiles}
                      />
                    </th>
                    <th scope="col"></th>
                    <th scope="col" className="w-32 px-6 py-2 font-medium">
                      Allkirjad
                    </th>
                    <th scope="col" className="w-32 px-6 py-2 font-medium">
                      Versioon
                    </th>
                    <th scope="col" className="w-56 py-2 font-medium text-left">
                      Uuendatud
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {allFiles?.map((file) => (
                    <TableRow
                      key={file.id}
                      id={file.id}
                      name={file.name}
                      type={file.type}
                      created={file.created}
                      createdBy={file.createdBy}
                      status={file.status}
                      totalSigners={file.totalSigners}
                      signedBy={file.signedBy}
                      version={file.version}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
