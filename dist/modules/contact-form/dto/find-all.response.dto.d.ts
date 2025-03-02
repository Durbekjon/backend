import { IContactForm } from './IContact-form';
export declare class FindAllContactFormsResponseDto {
    contactForms: IContactForm[];
    business: number;
    edu: number;
    travel: number;
    other: number;
}
