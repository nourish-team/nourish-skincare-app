export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Signup: undefined;
  HomeScreen: undefined;
  SkincareType: { skincareType: string };
  UserPageScreen: undefined;
  UserRoutinePageScreen: { routineId: number; routineName: string };
  AddJournalScreen: undefined;
  SearchToAddScreen: { routineId: number };
  JournalHistoryScreen: { routineId: number };
  CreateNewRoutineScreen: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  UserPage: undefined;
};
