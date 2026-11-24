import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_THEME = "theme"

export function useTheme(){
    const defineTheme = async (newTheme:string) => {        
        await AsyncStorage.setItem(KEY_THEME,newTheme);
    }

    const getTheme = async () => {
        return await AsyncStorage.getItem(KEY_THEME) 
    }

    const removeTheme = async () => {
        await AsyncStorage.removeItem(KEY_THEME);
    }
    return {
        defineTheme,
        getTheme,
        removeTheme
    }
}
