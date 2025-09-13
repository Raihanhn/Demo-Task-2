// pages/dashboard.js
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Dashboard() {
  useEffect(() => {
    // Badge rotation logic
    const badgeList = document.getElementById("badgeList");
    if (badgeList) {
      const badges = Array.from(badgeList.querySelectorAll(".badge-item"));
      function rotateBadges() {
        const firstBadge = badges.shift();
        badges.push(firstBadge);
        badges.forEach((badge) => badgeList.appendChild(badge));
        const lastElement = document.querySelector(".badge-count");
        badgeList.appendChild(lastElement);
      }
      const interval = setInterval(rotateBadges, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    // jQuery notification close logic
    if (typeof window !== "undefined") {
      const $ = require("jquery");
      $(document).ready(function () {
        if ($(".notification-close .close-icon").length) {
          $(".notification-close .close-icon").on("click", function () {
            $(this)
              .closest(".user-notification-box-section")
              .slideUp(300, function () {
                $(this).remove();
              });
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Mycoinpoll Dashboard</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oxanium:wght@200..800&display=swap"
          rel="stylesheet"
        />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        {/* Simplebar */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.css"
        />
        {/* Custom CSS */}
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/batch-levels.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </Head>

      <div className="ellipse ellipse1"></div>
      <div className="ellipse ellipse2"></div>
      <div className="ellipse ellipse3"></div>
      <div className="dashboard-main-area">
        <div className="dashboard-area d-flex align-items-start">
          {/* Left Sidebar */}
          <div className="dashboard-left position-relative">
            <div className="logo mb40">
              <a href="#">
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={200}
                  height={50}
                  className="w-100"
                />
              </a>
            </div>
            <div className="logo2 mb40">
              <a href="#">
                <Image
                  src="/assets/images/dashboard/icon/small-logo.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-100"
                />
              </a>
            </div>
            <div className="dashboard-left-menu">
              <ul>
                <li>
                  <a href="dashboard" className="menu-active-bg">
                    <Image
                      src="/assets/images/dashboard/icon/profile.png"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <span className="left-menu-text">User Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/transaction">
                    <Image
                      src="/assets/images/dashboard/icon/transactions.png"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <span className="left-menu-text">Transactions</span>
                  </a>
                </li>
                <li>
                  <a href="/ico">
                    <Image
                      src="/assets/images/dashboard/icon/ico.png"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <span className="left-menu-text">ICO</span>
                  </a>
                </li>
                <li>
                  <a href="/user/refferal-link-details">
                    <Image
                      src="/assets/images/dashboard/icon/referral.png"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <span className="left-menu-text">Referral User</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="dashboard-right">
            {/* Header */}
            <div className="dashboard-right-header-area d-flex align-items-center justify-content-between">
              <div className="page-info d-flex align-items-center">
                <div className="resize-icon">
                  <i className="fa-solid fa-expand"></i>
                </div>
                <h5 className="page-title">User Management</h5>
              </div>

              <div className="dashboard-header-right">
                <div className="d-flex align-items-center dashboard-header-right-group">
                  <div className="text-btn d-flex align-items-center border-gradient">
                    310 USDT
                    <span>
                      <Image
                        src="/assets/images/dashboard/icon/wallet2.png"
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    </span>
                  </div>
                  <div className="text-btn d-flex align-items-center border-gradient">
                    300 CRM
                    <span>
                      <Image
                        src="/assets/images/icon/wallet.png"
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    </span>
                  </div>
                  <div className="notification-icon position-relative">
                    <span>2+</span>
                    <Image
                      src="/assets/images/dashboard/icon/bell.png"
                      alt="icon"
                      width={20}
                      height={20}
                      className="dropdown-toggle"
                    />
                    <ul className="dropdown notification-box" data-simplebar style={{ height: 303 }}>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>
                        <a href="/notification" className="gradient-btn-small">
                          Show All
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="profile-mini-icon">
                    <a href="/user/user-profile">
                      <Image
                        src="/assets/images/dashboard/icon/user.png"
                        alt="user"
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="dashboard-body mt30 dashboard-box">
              {/* User Info Box */}
              <div className="user-info-overview-box d-flex align-items-center justify-content-between flex-wrap mt-2 g-20">
                <div className="user-info-text">
                  <div className="d-flex align-items-center g-5 mb-3">
                    <span className="text-white">
                      <b>Verified Status : </b>
                    </span>
                    <span className="verified-status d-flex align-items-center g-10">
                      <i className="fa-solid fa-circle-check"></i> Level-1
                    </span>
                  </div>
                  <h6>Username : hello12345</h6>
                  <h6>
                    Ethereum :{" "}
                    <span className="text-content">
                      0x73fCA0F1b86701ABb3De296C5B6B1b4bA1Ca2F9b
                    </span>
                  </h6>
                </div>

                <div className="batch-item text-center status-box d-flex align-items-center g-20">
                  <p>Achieved Batch</p>
                  <ul
                    id="badgeList"
                    className="mt-3 d-flex justify-content-center flex-row-reverse align-items-center"
                  >
                    <li className="badge-item">
                      <Image
                        className="rounded-circle batch-logo-sm"
                        src="/assets/images/batch/purchase.png"
                        alt="purchase"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="badge-item">
                      <Image
                        className="rounded-circle batch-logo-sm"
                        src="/assets/images/batch/referral.png"
                        alt="referral"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="badge-item">
                      <Image
                        className="rounded-circle batch-logo-sm"
                        src="/assets/images/batch/staking.png"
                        alt="staking"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="badge-item">
                      <Image
                        src="/assets/images/batch/exclusive.png"
                        alt="exclusive"
                        className="rounded-circle batch-logo-sm"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="badge-count">5+</li>
                  </ul>
                  <div className="position-relative z-2">
                    <a href="/user/batch-levels" className="border-gradient btn3 mt-3">
                      See Details
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional dashboard content goes here... */}
            </div>
          </div>
        </div>
      </div>

      {/* Scripts */}
       <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        strategy="beforeInteractive" // Load before page renders
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive" // Load after page renders
      />
    </>
  );
}
