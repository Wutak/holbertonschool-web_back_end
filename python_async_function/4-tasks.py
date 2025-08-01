#!/usr/bin/env python3
"""wait"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """wait async for a random delay and return

    Args:
        n(int), max_delay(int), max delay in secondes

    Returns:
        List[float], delays"""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        delays.append(await task)

    return delays
