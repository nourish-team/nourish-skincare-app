export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Signup: undefined;
  HomeScreen: undefined;
  SkincareType: { skincareType: string };
  UserPageScreen: undefined;
  UserRoutinePageScreen: { routineId: number; routineName: string };
  AddJournalScreen: { routineId: number };
  SearchToAddScreen: { routineId: number };
  JournalHistoryScreen: { routineId: number };
  CreateNewRoutineScreen: undefined;
  SearchToAddNewScreen: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  UserPage: undefined;
};
