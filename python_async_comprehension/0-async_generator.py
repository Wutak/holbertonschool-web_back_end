#!/usr/bin/env python3
"""
async generator
"""

import asyncio
import random


async def async_generator():
    """
    coroutine async generator

    loops 10 times and wait 1 sec

    returns a random number between 0 and 10
    """

    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
