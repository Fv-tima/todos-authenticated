import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { googleProvider } from "../firebase-config";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const [newInfo, setNewInfo] = useState("");
  const [todosList, setTodosList] = useState([]);
  const todosCollectionRef = collection(db, "TodosData");
  const users = currentUser?.uid;
  const t = query(todosCollectionRef, where("userId" ,"==", `${users}`))

  const getTodosList = async () => {
    try {
      const data = await getDocs(t);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodosList(filteredData);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodosList();
  }, []);

   

  const delTodos = async (id) => {
    const todosDoc = doc(db, "TodosData", id);
    await deleteDoc(todosDoc,);
    getTodosList();
   };

  const editTodos = async (id) => {
    const todosDoc = doc(db, "TodosData", todo.id);
    await updateDoc(todosDoc, { info: newInfo });
  };

  
  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    return signOut(auth);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signUpWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    todosList,
    setTodosList,
    getTodosList,
    todosCollectionRef,

    delTodos,
    editTodos,
    signin,
    signout,
    signUp,
    signUpWithGoogle,
    setNewInfo,
    newInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
