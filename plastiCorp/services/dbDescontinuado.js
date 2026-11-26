// import { createClient } from "@supabase/supabase-js";
// import "expo-sqlite/localStorage/install"
//
// export const supabase = createClient(url, key, {
//     auth: {
//         storage: localStorage,
//         autoRefreshToken: true,
//         persistSession: true,
//         detectSessionInUrl: false,
//     },
// });
// import { supabase } from "../services/db.js";
//   async function supabaseInsert(respostas, edad) {
//     try {
//       console.info(edad)
//
//       let obj = { respostas, "idade": edad }
//       console.log(obj)
//       let query = await supabase.from("tabela_respostas").insert(obj)
//     } catch (error) {
//       console.error("Teve um erro na inserção na linha", error.stack, "\nsobre - ", error.cause)
//     }
//   }
// supabaseInsert(resPlasticoTemp, idade)
//
