import { Ref } from 'vue';

// Appointments
export interface AppointmentDoctor {
  photo: string,
  name: string,
  specialty: string
}

export interface Appointment {
  id: number,
  date: string,
  status: string,
  doctor: AppointmentDoctor
}

export interface NewAppointmentData {
  specialty: string,
  name: string,
  date: string
}

export interface AppointmentsReturnData {
  list: Ref<Appointment[]>,
  handleChangeAppointmentStatus: any,
  handleSubmitAppointment: any
}

// News
export interface NewsPiece {
  id: number,
  title: string,
  description: string,
  fullDescription: string
}

export interface NewsState {
  modalOpen: boolean,
  activeNews: NewsPiece
}

export interface NewsReturnData {
  state: NewsState,
  list: Ref<NewsPiece[]>,
  handleCloseNewsModal: any,
  handleOpenNewsModal: any
}


// Results
export type ResultMonth = number[];

export interface ResultYear {
  july: ResultMonth,
  august: ResultMonth
}

export interface Result {
  '2020': ResultYear
}

export interface Results {
  glucose: Result,
  weight: Result
}

export interface ResultsReturnData {
  month: Ref<string>,
  type: Ref<string>,
  currentResultsData: any,
  handleChangeMonth: any,
  handleChangeType: any
}

// Prescriptions
export interface Prescription {
  id: number,
  name: string,
  pillSize: string,
  dosage: string,
  end: string
}

export interface PrescriptionsReturnData {
  list: Ref<Prescription[]>
}


// Notifications
export interface Notification {
  id: number,
  type: string,
  message: string,
  date: string
}

export interface NotificationsReturnData {
  list: Ref<Notification[]>,
  handleNotificationsDismissal: any,
  addNotification: any
}


// Appointment Modal
export interface AppointmentOptionsCity {
  value: string,
  label: string
}

export interface AppointmentOptionsDoctor {
  value: string,
  label: string,
  specialty: string,
  city: string
}

export interface AppointmentOptionsSpecialty {
  value: string,
  label: string
}

// misc

export interface DashboardReturnData {
  appointments: AppointmentsReturnData,
  results: ResultsReturnData,
  news: NewsReturnData,
  notifications: NotificationsReturnData,
  prescriptions: PrescriptionsReturnData
}
