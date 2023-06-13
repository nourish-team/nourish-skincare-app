export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Signup: undefined;
  HomeScreen: undefined;
  SkincareType: { skincareType: string };
  UserPageScreen: undefined;
  UserRoutinePageScreen: {
    routineId: number;
    routineName: string;
    routineProduct: number[];
  };
  AddJournalScreen: { routineId: number };
  SearchToAddScreen: {
    routineId: number;
    routineName: string;
    routineProduct: number[];
  };
  JournalHistoryScreen: { routineId: number };
  CreateNewRoutineScreen: {
    selectedItems: (number | { itemId: number; itemName: string })[];
  };
  SearchToAddNewScreen: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  UserPage: undefined;
};
