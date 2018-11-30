export interface Style {
    color : String;
    colorName : String;
    carColorImg : String;
}

export interface Rating {
    critic : Number;
    performance : Number;
    interior : Number;
    safety : Number;
    reliability : Number;
    overall : Number;
}

export interface Cars {
    styles : [Style];
    rating : Rating;
    name : String;
}
