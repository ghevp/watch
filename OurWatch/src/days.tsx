import React, { useState, useEffect } from 'react';

export function getYear() {
  const date = new Date();
  return date.getFullYear();
}

export function getMonth() {
  const date = new Date();
  return date.getMonth() + 1; // JavaScriptの月は0から始まるため、1を足します
}

export function getDay() {
  const date = new Date();
  return date.getDate();
}

export function getDayOfWeek() {
  const date = new Date();
  const dayOfWeekList = ['日', '月', '火', '水', '木', '金', '土'];
  return dayOfWeekList[date.getDay()];
}
export function gettime() {
  const date = new Date();
  return date.toLocaleTimeString();
}