
export type createCustomer = {
        uniq: string;
        name: string;
        email?: string;
        phone: string | number;
        address?: string;
        active?: string | boolean | number;
}