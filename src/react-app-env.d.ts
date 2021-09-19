/// <reference types="react-scripts" />
import React from "react";

export interface IState {
	people: IPeople[]
}

export interface IPeople {
	name: string
	age: number
	url: string
	note?: string
}

export interface IProps {
	people: IState['people'],
	setPeople: React.Dispatch<React.SetStateAction<IState['people']>>
}

