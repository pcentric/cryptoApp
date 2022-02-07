import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrency,
  News,
  Cryptodetails,
} from "./components/index";
export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact element={<Homepage />} path="/" />
              {/* <Route exact element={<Exchanges />} path="/exchanges" /> */}
              <Route
                exact
                element={<Cryptocurrency />}
                path="/cryptocurrencies"
              />
              <Route exact element={<Cryptodetails />} path="/crypto/:coinId" />
              <Route exact element={<News />} path="/news" />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptverse <br /> All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/"> Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}
