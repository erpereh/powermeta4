import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
  searchHirePlaces: vi.fn(),
}));

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.getCurrentAuthContext,
  deleteSessionCookie: mocks.deleteSessionCookie,
}));
vi.mock("@/lib/meta4/hire/catalog-queries", () => ({
  searchHirePlaces: mocks.searchHirePlaces,
}));

import { GET } from "./route";

const request = (query: string) =>
  new NextRequest(`http://localhost/api/hire/places?q=${encodeURIComponent(query)}`);

beforeEach(() => {
  mocks.getCurrentAuthContext.mockReset();
  mocks.deleteSessionCookie.mockReset();
  mocks.searchHirePlaces.mockReset();
});

describe("hire place search route", () => {
  it("rejects requests without a session and never queries PeopleNet", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue(null);

    const response = await GET(request("madrid"));

    expect(response.status).toBe(401);
    expect(mocks.deleteSessionCookie).toHaveBeenCalledTimes(1);
    expect(mocks.searchHirePlaces).not.toHaveBeenCalled();
  });

  it("returns the places found for the query", async () => {
    const places = [{ id: "724/28/28/28079", name: "MADRID", detail: "Madrid · España" }];
    mocks.getCurrentAuthContext.mockResolvedValue({ authContext: { mode: "meta4" } });
    mocks.searchHirePlaces.mockResolvedValue(places);

    const response = await GET(request("madr"));

    expect(response.status).toBe(200);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    await expect(response.json()).resolves.toEqual({ ok: true, data: places });
    expect(mocks.searchHirePlaces).toHaveBeenCalledWith("madr");
  });

  it("hides database errors behind a stable error code", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue({ authContext: { mode: "meta4" } });
    mocks.searchHirePlaces.mockRejectedValue(new Error("Login failed for user"));
    vi.spyOn(console, "error").mockImplementation(() => undefined);

    const response = await GET(request("madr"));

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      ok: false,
      errorCode: "PLACE_SEARCH_FAILED",
    });
  });
});
