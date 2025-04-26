// src/types.ts

export interface Guest {
  name: string;
  surname: string;
}

export interface Allergies {
  glutine: boolean;
  lattosio: boolean;
  fruttaDiMare: boolean;
  fruttaSecca: boolean;
  altro: string;
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Presenza {
  id: string;
  ospiti: Guest[];
  allergie: Allergies;
  timestamp: any; // FirebaseFirestore.Timestamp
}
