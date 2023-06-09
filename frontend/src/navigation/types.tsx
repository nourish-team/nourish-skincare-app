export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Signup: undefined;
  HomeScreen: undefined;
  SkincareType: { skincareType: string };
  UserPageScreen: undefined;
  UserRoutinePageScreen: { routineId: number; routineName: string };
  AddJournalScreen: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  UserPage: undefined;
};
