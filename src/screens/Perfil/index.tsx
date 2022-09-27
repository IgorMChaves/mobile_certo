import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { useAuth } from "../../hook/auth";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync} from "../../services/data/Push";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Perfil() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user&& user.profile_photo_url) {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    async function fetchToken() {
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
        <Text style={styles.title}>{user?.name}</Text>
      </View>
      <View style={styles.input}>
      </View>     
    </View>
  );
}


       
    
