import React from "react";

export interface iApiError {
  error: string;
}

export interface iGame {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
  short_description?: string;
  rating?: number | null;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  favoriteGames: iGame[];
}

export interface iDefaultContextProps{
    children: React.ReactNode;
}
