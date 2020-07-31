import { reactive, ref } from 'vue';

import { newsMock } from '@/mocks/mocks';
import { NewsPiece, NewsReturnData, NewsState } from '@/views/dashboard.interfaces';

const emptyNews = {
  id: 1,
  title: '',
  description: '',
  fullDescription: ''
}

export function useNews(): NewsReturnData {
  const state = reactive<NewsState>({
    modalOpen: false,
    activeNews: {...emptyNews},
  });

  const list = ref<NewsPiece[]>(newsMock)

  function handleOpenNewsModal(news: NewsPiece) {
    state.modalOpen = true;
    state.activeNews = news;
  }

  function handleCloseNewsModal() {
    state.modalOpen = false;
    state.activeNews = {...emptyNews};
  }

  return {
    state,
    list,
    handleCloseNewsModal,
    handleOpenNewsModal
  }
}
