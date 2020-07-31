import { computed, ref } from 'vue';

import { resultsDataMock } from '@/mocks/mocks';
import { Results, ResultMonth, ResultsReturnData } from '@/views/dashboard.interfaces';

export function useResults(): ResultsReturnData {
  const resultsData: Results = resultsDataMock;

  const month = ref<string>('july');
  const type = ref<string>('glucose');

  // @ts-ignore
  const currentResultsData: ResultMonth = computed(() => resultsData[type.value]['2020'][month.value]);

  function handleChangeType(type: string) {
    month.value = type;
  }

  function handleChangeMonth(month: string) {
    type.value = month;
  }

  return {
    month,
    type,
    currentResultsData,
    handleChangeMonth,
    handleChangeType
  }
}
