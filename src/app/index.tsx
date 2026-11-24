import { useTheme } from "@/hooks/useTheme";
import { useCounter } from "@/stores/useCounter";
import { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {

  const [theme, setTheme] = useState('')
  const {defineTheme,getTheme,removeTheme} = useTheme()

  const incease = useCounter((state)=> state.incease)
  const decrement = useCounter((state)=> state.decrement)
  const number = useCounter((state)=> state.number)

  const loadTheme = async ()=>{
    const loadedTheme = await getTheme();

    if(loadedTheme){
      setTheme(loadedTheme)
    }
  }

  const changeTheme = async () =>{
    
  }

  useEffect(()=>{
    loadTheme()
  },[])

  return (
    <View style={styles.container}>
      <Button title="Tema claro" onPress={changeTheme} ></Button>
      <Button title="Tema escuro" onPress={changeTheme} ></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
