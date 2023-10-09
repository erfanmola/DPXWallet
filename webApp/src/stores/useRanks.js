import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

export const useRankStore = defineStore("ranks", {

    state: () => ({
        data: [
            { rank: 1, min: 0     },
            { rank: 2, min: 100   },
            { rank: 3, min: 500   },
            { rank: 4, min: 1000  },
            { rank: 5, min: 5000  },
            { rank: 6, min: 10000 },
            { rank: 7, min: 25000 },
            { rank: 8, min: 50000 },
        ]
    }),

});