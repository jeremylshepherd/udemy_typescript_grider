import { AxiosPromise } from "axios";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export type Callback = () => void;

export interface HasId {
    id?: number;
}

export interface iModelAttributes<T> {
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
    set(value: T): void;
}

export interface iAPISync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

export interface iEvents {
    on(eventName: string, callbck: Callback): void;
    trigger(eventName: string): void;
}

export interface iModel {
    on(eventName: string, callback: () => void): void;
}