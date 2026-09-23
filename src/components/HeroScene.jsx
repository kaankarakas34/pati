import React from 'react';

function Palm({ className }) {
  return <svg className={className} viewBox="0 0 150 190" fill="none" aria-hidden="true">
    <path d="M78 68C82 112 81 149 72 188" stroke="#956f91" strokeWidth="13" strokeLinecap="round" />
    <path d="M79 70C52 47 26 51 5 69C36 64 57 76 77 91Z" fill="#638d91" />
    <path d="M78 70C51 27 26 22 9 28C41 39 57 61 70 91Z" fill="#719b9c" />
    <path d="M79 70C76 27 86 8 105 1C94 33 95 59 85 88Z" fill="#608b90" />
    <path d="M79 70C109 39 130 36 148 49C117 52 100 71 83 92Z" fill="#6e9a96" />
    <path d="M78 70C111 72 134 90 139 113C111 91 90 90 74 93Z" fill="#5c858d" />
  </svg>;
}

// Each scenic piece remains independent so the mascots and scenery can be moved separately.
export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-scene__sun" />
      <div className="hero-scene__cloud hero-scene__cloud--one" />
      <div className="hero-scene__cloud hero-scene__cloud--two" />
      <div className="hero-scene__hill hero-scene__hill--back" />
      <div className="hero-scene__hill hero-scene__hill--front" />
      <div className="hero-scene__sea" />
      <div className="hero-scene__island" />
      <Palm className="hero-scene__palm hero-scene__palm--left" />
      <Palm className="hero-scene__palm hero-scene__palm--right" />
      <div className="hero-scene__hotel">
        <div className="hero-scene__roof" />
        <div className="hero-scene__window" />
        <div className="hero-scene__window" />
        <div className="hero-scene__door" />
        <div className="hero-scene__sign">🐾<span>HOTEL</span></div>
      </div>
      <div className="hero-scene__rail" />
      <span className="hero-scene__spark hero-scene__spark--one">✦</span>
      <span className="hero-scene__spark hero-scene__spark--two">✦</span>
      <span className="hero-scene__bubble hero-scene__bubble--one" />
      <span className="hero-scene__bubble hero-scene__bubble--two" />
      <img className="hero-scene__pet hero-scene__dog" src="/images/hero-dog.png" alt="" />
      <img className="hero-scene__pet hero-scene__cat" src="/images/hero-cat.png" alt="" />
    </div>
  );
}
