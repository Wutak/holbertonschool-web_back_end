#!/usr/bin/env python3
"""to kv"""
from typing import Union, Tuple
"""to kv"""


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """to kv"""
    return (k, float(v **2))
