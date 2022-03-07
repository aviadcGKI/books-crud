import React, { useState } from 'react'
import { db } from 'db' 
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function Home() {

  

  return (
    <>
      <h1>welcome home</h1>
    </>
  )
}

export default Home