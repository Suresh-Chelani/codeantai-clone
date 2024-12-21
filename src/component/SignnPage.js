import React, { useState } from "react";
import { ArrowLongUpIcon, KeyIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import "./SignR.css";
import "./SignL.css";

const SignL = () => {
  return (
    <div className="Sing-L">
      <img src="/images/logoLrg.png" alt="logo" className="logo-faded" />
      <div className="card">
        <div className="card-header">
          <img src={"/images/logo.svg"} alt={"logo"} className="logo-icon" />
          <span className="card-title">AI to Detect & Autofix Bad Code</span>
        </div>
        <div className="card-stats">
          <div className="stat-item">
            <span className="stat-value">30+</span>
            <span className="stat-label">Language Support</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">10K+</span>
            <span className="stat-label">Developers</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100K+</span>
            <span className="stat-label">Hours Saved</span>
          </div>
        </div>
      </div>

      <div className="graph-card">
        <div className="graph-header">
          <img src={"/images/graph.png"} alt={"graph"} className="graph-icon" />
          <div className="graph-stats">
            <div className="growth">
              <ArrowLongUpIcon className="growth-icon" />
              <span className="growth-value">14%</span>
            </div>
            <div className="growth-label">This week</div>
          </div>
        </div>
        <div className="graph-body">
          <span className="issues-label">Issues Fixed</span>
          <span className="issues-value">500K+</span>
        </div>
      </div>
    </div>
  );
};

const SignR = () => {
  const [isSaas, setIsSaas] = useState(true);

  return (
    <div className="Sign-R-container">
      <div className="auth-card">
        <div className="auth-card-header">
          <div className="auth-logo">
            <img src={"/images/logo.svg"} alt={"logo"} />
            <span className="auth-logo-text">CodeAnt AI</span>
          </div>
          <div className="auth-title">Welcome to CodeAnt AI</div>
          <div className="auth-toggle">
            <button
              className={`auth-toggle-btn ${isSaas ? "active" : ""}`}
              onClick={() => setIsSaas(true)}
            >
              SAAS
            </button>
            <button
              className={`auth-toggle-btn ${isSaas ? "" : "active"}`}
              onClick={() => setIsSaas(false)}
            >
              Self Hosted
            </button>
          </div>
        </div>
        <div className="auth-card-body">
          {isSaas ? (
            <div className="auth-options">
              <Link to={"/dashboard"} className="auth-option">
                <img
                  src={"/images/github.svg"}
                  alt={"github"}
                  className="auth-option-icon"
                />
                Sign in with Github
              </Link>
              <Link to={"/dashboard"} className="auth-option">
                <img
                  src={"/images/bitbuck.svg"}
                  alt={"bitbucket"}
                  className="auth-option-icon"
                />
                Sign in with Bitbucket
              </Link>
              <Link to={"/dashboard"} className="auth-option">
                <img
                  src={"/images/azure.svg"}
                  alt={"azure-devops"}
                  className="auth-option-icon"
                />
                Sign in with Azure Devops
              </Link>
              <Link to={"/dashboard"} className="auth-option">
                <img
                  src={"/images/gitlab.svg"}
                  alt={"gitlab"}
                  className="auth-option-icon"
                />
                Sign in with GitLab
              </Link>
            </div>
          ) : (
            <div className="auth-options">
              <Link to={"/dashboard"} className="auth-option">
                <img
                  src={"/images/gitlab.svg"}
                  alt={"gitlab"}
                  className="auth-option-icon"
                />
                Sign in with GitLab
              </Link>
              <Link href={"/dashboard"} className="auth-option">
                <KeyIcon className="auth-option-icon" />
                Sign in with SSO
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="auth-footer">
        <span>
          By signing up you agree to the <b>Privacy Policy.</b>
        </span>
      </div>
    </div>
  );
};

const SignnPage = () => {
  return (
    <div
      className="auth-container"
      style={{
        display: "flex",
        gap: "0rem",
        alignItems: "center",
        width: "100vw",
        backgroundColor: "#f9fafb",
      }}
    >
      <SignL />
      <SignR />
    </div>
  );
};

export default SignnPage;
