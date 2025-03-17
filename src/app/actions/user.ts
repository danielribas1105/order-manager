"use server"
import { prisma } from "../libs/prisma";

export async function getUsers() {
   const listaUsuarios = await prisma.usuarios.findMany();
   const res = await fetch('/api/users');
   //return res.json();
   console.log("listaUsuarios"+listaUsuarios);
   return listaUsuarios;
}