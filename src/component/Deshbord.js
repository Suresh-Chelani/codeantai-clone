import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RepositoryCard from "./RepositoryCard";
import { MdRefresh } from "react-icons/md";
import "./Deshbord.css";

const Deshbord = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repositories, setRepositories] = useState([
    {
      name: "design-system",
      visibility: "Public",
      language: "React",
      size: 7320,
      updated: "1 day",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      language: "Javascript",
      size: 5871,
      updated: "2 days",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      language: "Python",
      size: 4521,
      updated: "5 days",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      language: "Swift",
      size: 3096,
      updated: "3 days",
    },
  ]);
  const [newRepo, setNewRepo] = useState({
    name: "",
    visibility: "Public",
    language: "",
    size: "",
    updated: "",
  });
  const [isAdding, setIsAdding] = useState(false);

  const ResetTog = () => {
    setSearchTerm("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRepo({ ...newRepo, [name]: value });
  };

  const handleAddRepository = () => {
    setRepositories([...repositories, newRepo]);
    setNewRepo({
      name: "",
      visibility: "Public",
      language: "",
      size: "",
      updated: "",
    });
    setIsAdding(false);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="main-content-inner">
          <div className="header">
            <div>
              <h2>Repositories</h2>
              <p>{repositories.length} total repositories</p>
              <form
                style={{
                  position: "relative",
                  width: "100%",
                  margin: "0 auto",
                  maxWidth: "400px",
                  marginBottom: "20px",
                }}
              >
                <input
                  type="search"
                  placeholder="Search Repositories"
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 40px", 
                    border: "1px solid #D5D7DA",
                    borderRadius: "5px",
                    fontSize: "14px",
                    background: `transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center`,
                    backgroundSize: "16px",
                    paddingLeft: "30px",
                  }}
                />
              </form>
            </div>
            <div className="btn">
              <button className="refresh-button" onClick={ResetTog}>
                <MdRefresh size={23} color="#414651" />
                <div style={{ marginTop: "5px", marginLeft: "5px" }}>
                  Refresh All
                </div>
              </button>
              <button
                className="add-repository-button"
                onClick={() => setIsAdding(true)}
              >
                + Add Repository
              </button>
            </div>
          </div>
          {isAdding && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3 className="modal-title">Add New Repository</h3>
                <form className="modal-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Repository Name"
                      value={newRepo.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="language"
                      placeholder="Programming Language"
                      value={newRepo.language}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="size"
                      placeholder="Size (KB)"
                      value={newRepo.size}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="updated"
                      placeholder="Last Updated"
                      value={newRepo.updated}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-actions">
                    <button
                      type="button"
                      onClick={handleAddRepository}
                      className="btn-submit"
                    >
                      Add Repository
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAdding(false)}
                      className="btn-cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="repository-list">
            {filteredRepositories.length > 0 ? (
              filteredRepositories.map((repo) => (
                <RepositoryCard key={repo.name} {...repo} />
              ))
            ) : (
              <p className="no-repos-message">No repositories found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshbord;
