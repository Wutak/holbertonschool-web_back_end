#!/usr/bin/env python3
"""asynchronous"""


import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """function async
    Args:
        max_delay(int): maximum delay
    Returns:
        float, delay"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
