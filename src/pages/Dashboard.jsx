import React, { useState } from "react";
import Landing from "./LandingPage";
import ProductPage from "./Product";
import BottomNav from "./../components/BotNav";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Related to dashboard */}
      <BottomNav/>
    </div>
  );
}