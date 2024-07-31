"use client";

import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import useTextsStore from "@/stores/textsStore";
import useStatsStore from "@/stores/statsStore";
import Profile from "@/components/Profile/Profile";
import TypingArea from "@/components/Typing/TypingArea";
import StatsDisplay from "@/components/Stats/StatsDisplay";
import NextButton from "@/components/Buttons/NextButton";
import getRandomEntry from "@/lib/getRandomEntry";
import fetchEntries from "@/lib/fetchEntries";
import initializeDefaultEntries from "@/lib/initializeDefaultEntries";
import styles from "./page.module.css";

const Typeometer: React.FC = () => {
  return (
    textEntry && (
      <>
        <Profile />
        <main className={styles.mainContainer}>
          <h1>{textEntry.source}</h1>
          <TypingArea
            textToType={textEntry.text}
            onTypingCompletion={onTypingCompletion}
            reset={reset}
          />
          {typingStats && (
            <>
              <StatsDisplay
                speed={typingStats.speed}
                accuracy={typingStats.accuracy}
              />
              <NextButton onClick={onNextButtonClick} />
            </>
          )}
        </main>
      </>
    )
  );
};

export default Typeometer;
