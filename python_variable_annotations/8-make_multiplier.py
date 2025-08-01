#!/usr/bin/env python3
"""make multiplier"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """make multiplier"""
    def multiplier_function(x: float) -> float:
        """make multiplier"""
        return x * multiplier
    return multiplier_function
