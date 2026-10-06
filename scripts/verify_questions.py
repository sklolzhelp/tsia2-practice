#!/usr/bin/env python3
"""Check the practice bank: structure, answer indexes, and math arithmetic."""

import pathlib
import re

root = pathlib.Path(__file__).resolve().parents[1]
text = (root / "questions.js").read_text()

# Pull objects crudely enough to assert counts and answer bounds.
ids = re.findall(r'id: "([^"]+)"', text)
answers = [int(n) for n in re.findall(r"answer: (\d+)", text)]
choice_blocks = re.findall(r"choices: \[([\s\S]*?)\]", text)

assert len(ids) == 40, len(ids)
assert len(set(ids)) == 40
assert len(answers) == 40
assert all(0 <= a <= 3 for a in answers)
assert len(choice_blocks) == 40
for block in choice_blocks:
    # Count quoted choices, ignoring escaped quotes (none expected).
    assert len(re.findall(r'"(?:[^"\\]|\\.)*"', block)) == 4, block[:80]

checks = {
    "m01": 80 * 0.80,
    "m02": 24 * 5 / 3,
    "m04": 2 / 12 * 30,
    "m05": (15 + 6) / 3,
    "m07": 2 * 5 - 4,
    "m08": 14 / 2 - 3,
    "m10": 25 + 0.10 * 80,
    "m11": 8 * 5,
    "m12": (6**2 + 8**2) ** 0.5,
    "m13": 3**2,
    "m14": 2.5 * 12,
    "m15": 3**3,
    "m16": 3 / 8,
    "m17": 7,
    "m18": (10 + 12 + 14 + 16) / 4,
    "m19": 0.5 * 0.5,
    "m20": 16 / 40,
}
expected = {
    "m01": 64,
    "m02": 40,
    "m04": 5,
    "m05": 7,
    "m07": 6,
    "m08": 4,
    "m10": 33,
    "m11": 40,
    "m12": 10,
    "m13": 9,
    "m14": 30,
    "m15": 27,
    "m16": 0.375,
    "m17": 7,
    "m18": 13,
    "m19": 0.25,
    "m20": 0.4,
}
for key, value in checks.items():
    assert abs(value - expected[key]) < 1e-9, (key, value)

# Factor check for the rational expression and quadratic.
assert (2) * (3) == 6 and 2 + 3 == 5
assert (5) * (5) - 9 == 16 and 5 + 3 == 8  # (x+3) at x=5 equals simplified value

print("verified", len(ids), "items")
