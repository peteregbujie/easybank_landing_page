/* eslint-disable no-use-before-define */
import { api, budgeting, onboarding, online } from "../assets";

export const navLinks = [
 {
  id: "home",
  title: "Home",
 },
 {
  id: "about",
  title: "About",
 },
 {
  id: "contact",
  title: "Contact",
 },
 {
  id: "blog",
  title: "Blog",
 },
 {
  id: "careers",
  title: "Careers",
 },
];

export const Services = [
 {
  title: "Online Banking",
  text:
   "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
  img: online,
 },
 {
  title: "Simple Budgeting",
  text:
   "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  img: budgeting,
 },
 {
  title: "Fast Onboarding",
  text:
   "We dont do branches. Open your accounts in minutes online and start taking control of your finances right away.",
  img: onboarding,
 },
 {
  title: "Open API",
  text:
   "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  img: api,
 },
];
