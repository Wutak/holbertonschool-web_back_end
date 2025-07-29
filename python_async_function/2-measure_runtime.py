#!/usr/bin/env python3
"""runtime"""

import time
import asyncio
from 1-wait_n import wait_n


def measure_time(n: int, max_delay: int) -> float:
    """runtime
    Args:
        n(int), max_delay(int)
    Returns:
        float, total_time / n"""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
