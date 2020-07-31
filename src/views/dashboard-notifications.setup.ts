import { ref } from 'vue';

import { notificationsMock } from '@/mocks/mocks';
import { Notification, NotificationsReturnData } from "@/views/dashboard.interfaces";

export function useNotifications(): NotificationsReturnData {
  const list = ref<Notification[]>(notificationsMock);

  function handleNotificationsDismissal(id: number) {
    list.value = list.value.filter(notif => notif.id !== id)
  }

  function addNotification(type: string, message: string) {
    const newNotification: Notification = {
      id: Number(list.value.length + 1),
      type,
      message,
      date: '01/08/2020'
    };

    list.value = [
      {...newNotification},
      ...list.value
    ]
  }

  return {
    list,
    handleNotificationsDismissal,
    addNotification
  }
}
