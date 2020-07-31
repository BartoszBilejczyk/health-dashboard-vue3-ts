import { ref } from 'vue'

import { appointmentsMock } from '@/mocks/mocks'
import {
  Appointment,
  NewAppointmentData,
  NotificationsReturnData,
  AppointmentsReturnData
} from '@/views/dashboard.interfaces'


export function useAppointments(notifications: NotificationsReturnData) : AppointmentsReturnData {
  const list = ref<Appointment[]>(appointmentsMock);

  function handleChangeAppointmentStatus(id: number, status: string) {
    const index = list.value.findIndex(app => app.id === id);

    list.value = [
      ...list.value.slice(0, index),
      {
        ...list.value[index],
        status
      },
      ...list.value.slice(index + 1)
    ]

    if (status === 'rejected') {
      notifications.addNotification('action', `You rejected the appointment with ${list.value[index].doctor.name}, ${list.value[index].doctor.specialty}`)

    } else {
      notifications.addNotification('info', `You confirmed the appointment with ${list.value[index].doctor.name}, ${list.value[index].doctor.specialty}`)
    }
  }

  function handleSubmitAppointment({specialty, name, date}: NewAppointmentData) {
    list.value = [
      {
        id: list.value.length + 1,
        date,
        status: '',
        doctor: {
          photo: 'https://randomuser.me/api/portraits/thumb/women/95.jpg',
          name,
          specialty
        }
      },
      ...list.value
    ]

    notifications.addNotification('action', `You made an appointment with ${name}, ${specialty}`)
  }

  return {
    list,
    handleChangeAppointmentStatus,
    handleSubmitAppointment
  }
}
