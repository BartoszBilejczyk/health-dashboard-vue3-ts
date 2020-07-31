import { ref } from 'vue';

import { prescriptionsMock } from '@/mocks/mocks';
import { PrescriptionsReturnData, Prescription } from '@/views/dashboard.interfaces';

export function usePrescriptions(): PrescriptionsReturnData {
  const list = ref<Prescription[]>(prescriptionsMock);

  return {
    list
  }
}
