export const COUPON_CODES = {
    GFRIDAY: "GFRIDAY",
    DIWALI: "DIWALI2025",
    NY2025: "NY2025",
    SUMMER10: "SUMMER10",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
