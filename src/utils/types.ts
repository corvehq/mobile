import React from "react";

export interface HomeActionType {
    title: string;
    screen: string;
    icon: React.JSX.Element;
}

export type RBSheetCustomRef = {
    current: {
        open: () => void;
        close: () => void;
    };
};

export type Nav = {
    navigate: (value: string, objectValue?: any) => void;
    goBack: any;
    getParam: (valueOne?: string, valueTwo?: string) => void;
};

export interface HomeMethodsType {
    title: string;
    description: string;
    icon: React.JSX.Element;
    screen: string;
    accentColor: string;
}

export interface BeneficiaryTypes {
    name: string;
    image: any;
}

export interface BankListTypes {
    name: string;
    slug: string;
    code: string;
    ussd: string;
    logo: string;
}

export interface AssetListTypes {
    asset: string;
    symbol: React.JSX.Element;
    assetId: string;
}

export interface BottomTabButtonTypes {
    title: string;
    routeTitle: string;
    icon: (active: boolean) => React.JSX.Element;
}

export interface ProfileCredType {
    title: string;
    data: string;
    screen: string | null;
}

export interface SecurityCredType {
    title: string;
    screen: string;
    toggle: boolean;
}
