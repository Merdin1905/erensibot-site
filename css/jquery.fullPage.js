/*!
 * fullPage 2.7.9
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 * Contribution by Jhony0311
 */
/*
* PURE - Sublime Coming Soon Template
* Build Date: July-August 2016
* Last Update: August 2016
* Author: Madeon08 for ThemeHelite
* Copyright (C) 2016 ThemeHelite
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/
/*
* PURE - Sublime Coming Soon Template
* Build Date: July-August 2016
* Last Update: August 2016
* Author: Madeon08 for ThemeHelite
* Copyright (C) 2016 ThemeHelite
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/
html.fp-enabled,
.fp-enabled body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  /*Avoid flicker on slides transitions for mobile phones #336 */
  -webkit-tap-highlight-color: transparent; }

#superContainer {
  height: 100%;
  position: relative;
  /* Touch detection for Windows 8 */
  -ms-touch-action: none;
  /* IE 11 on Windows Phone 8.1*/
  touch-action: none; }

.fp-section {
  position: relative;
  -webkit-box-sizing: border-box;
  /* Safari<=5 Android<=3 */
  -moz-box-sizing: border-box;
  /* <=28 */
  box-sizing: border-box; }

.fp-slide {
  float: left; }

.fp-slide, .fp-slidesContainer {
  height: 100%;
  display: block; }

.fp-slides {
  z-index: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.3s ease-out;
  /* Safari<=6 Android<=4.3 */
  transition: all 0.3s ease-out; }

.fp-section.fp-table, .fp-slide.fp-table {
  display: table;
  table-layout: fixed;
  width: 70%; }

.fp-tableCell {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%; }

.fp-slidesContainer {
  float: left;
  position: relative; }

.fp-controlArrow {
  -webkit-user-select: none;
  /* webkit (safari, chrome) browsers */
  -moz-user-select: none;
  /* mozilla browsers */
  -khtml-user-select: none;
  /* webkit (konqueror) browsers */
  -ms-user-select: none;
  /* IE10+ */
  position: absolute;
  z-index: 4;
  top: 50%;
  cursor: pointer;
  width: 0;
  height: 0;
  border-style: solid;
  margin-top: -38px;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }
  .fp-controlArrow.fp-prev {
    left: 15px;
    width: 0;
    border-width: 38.5px 34px 38.5px 0;
    border-color: transparent #fff transparent transparent; }
  .fp-controlArrow.fp-next {
    right: 15px;
    border-width: 38.5px 0 38.5px 34px;
    border-color: transparent transparent transparent #fff; }

.fp-scrollable {
  overflow: scroll; }

.fp-notransition {
  -webkit-transition: none !important;
  transition: none !important; }

.fp-slidesNav {
  position: absolute;
  z-index: 4;
  left: 50%;
  opacity: 1; }
  .fp-slidesNav.bottom {
    bottom: 17px; }
  .fp-slidesNav.top {
    top: 17px; }

.fp-slidesNav ul li {
  display: inline-block; }

.fp-auto-height.fp-section,
.fp-auto-height .fp-slide,
.fp-auto-height .fp-tableCell {
  height: auto !important; }
