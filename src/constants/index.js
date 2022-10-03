/* eslint-disable no-use-before-define */
import {
 api,
 budgeting,
 confetti,
 currency,
 onboarding,
 online,
 plane,
 restaurant,
} from "../assets";

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

export const ServicesData = [
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

export const ArticlesData = [
 {
  img: currency,
  author: "By Claire Robinson",
  title: "Receive money in any currency with no fees",
  content:
   "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
 },
 {
  img: restaurant,
  author: " By Wilson Hutton",
  title: " Treat yourself without worrying about money",
  content:
   "Our simple budgeting features allows you to separate out your spending and set realistic limits each month. That mean you...",
 },
 {
  img: plane,
  author: " By Wilson Hutton",
  title: " Take your Easybank card wherever you go",
  content:
   "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
 },
 {
  img: confetti,
  author: " By Claire Robinson",
  title: " Our invite-only Beta accounts are now live!",
  content:
   "After a lot of hard work by the whole team, we're excited to launch our closed beta It's easy to request an invite through the site...",
 },
];
